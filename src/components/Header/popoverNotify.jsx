import { Box } from '../Box';
import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { IconDot } from '../../resources/icons/icon_dot';
import { useListNotify } from '../../hooks/hookLayout';
import { SWAP_STATUS, TIME_FORMAT } from '../../common/constant';
import { getNetWorkByName, renderAmount } from '../../utils';
import { useSelector } from 'react-redux';
import moment from 'moment';

const notifySender = {
  [SWAP_STATUS.UNCLAIMED]: 'notify.swap_user_sender_success',
  [SWAP_STATUS.CLAIMED]: 'notify.swap_user_sender_claim_success',
};

const notifyReceipt = {
  [SWAP_STATUS.UNCLAIMED]: 'notify.swap_user_receipt_success',
  [SWAP_STATUS.CLAIMED]: 'notify.swap_user_receipt_claim_success',
};

export const NotifyItem = ({ notify, t, callbackViewDetailNotify }) => {
  const { listToken } = useSelector(state => state.listTokenReducer);
  const sourceType = getNetWorkByName(notify.sourceType, listToken);
  const targetType = getNetWorkByName(notify.targetType, listToken);
  const dataPassMessage = {
    amount: renderAmount(notify?.amount),
    token: `N1 (${sourceType.sort_name})`,
    address: notify?.fromAddress,
    destinationNetwork: targetType.name,
  };
  const messageSender = t(notifySender[notify?.status] || 'notify.swap_user_sender_failed', dataPassMessage);
  const messageReceipt = t(notifyReceipt[notify?.status] || 'notify.swap_user_receipt_failed', dataPassMessage);
  return (
    <Box onClick={callbackViewDetailNotify(notify?.transactionId, notify?._id, notify?.isRead, notify?.isSending)} className="notify-item-wrap">
      <Box className="box-icon mr-24">{!notify?.isRead && <IconDot />}</Box>
      <Box className="box-content-notify">
        <Typography.Paragraph className="text-notify" ellipsis={{ rows: 2 }}>
          <div
            dangerouslySetInnerHTML={{
              __html: notify?.isSending ? messageSender : messageReceipt,
            }}
          />
        </Typography.Paragraph>
        <Typography.Paragraph className="text-created">{moment(notify?.createdAt).format(TIME_FORMAT.DATE_TIME)}</Typography.Paragraph>
      </Box>
    </Box>
  );
};

const PopoverNotify = () => {
  const { t } = useTranslation();

  const { listNotify } = useListNotify({});

  const onViewDetailNotify = (transactionId, notifyId, isRead, isSending) => () => {
    window.open(`/my-transaction?transactionId=${transactionId}&notifyId=${notifyId}&isRead=${isRead}&isSending=${isSending}`, '_self');
  };

  return (
    <Box className="popover-notify-container">
      <Typography.Title className="title ml-16" level={4}>
        {t('header.notification')}
      </Typography.Title>
      <Box className="list-notify-box">
        {listNotify?.map((notify, index) => (
          <NotifyItem key={index} callbackViewDetailNotify={onViewDetailNotify} notify={notify} t={t} />
        ))}
      </Box>
    </Box>
  );
};

export default PopoverNotify;
