import { Box } from '../Box';
import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { EllipsisMiddleCommon } from '../Typography/ellipsisMiddle';
import { CopyIcon } from '../Icons/CopyIcon';
import { getFullPathByEndpoint, renderAmountWithZero } from '../../utils';
import { useTranslation } from 'react-i18next';
import { IconDisconnect } from '../../resources/icons/icon_disconnect';
import { addressActions } from '../../redux/actions/addressActionCreators';
import { useGetBalance } from '../../hooks/hookTransaction';

export const PopoverAddress = ({ visible }) => {
  const { address, infoNetwork } = useSelector(state => state.addressReducer);
  const [balance, setBalance] = useState(0);
  const { getBalance } = useGetBalance();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onDisconectWallet = () => {
    dispatch(addressActions.disconnectWallet());
  };

  useEffect(() => {
    getBalance().then(balance => setBalance(balance));
  }, [visible, infoNetwork, address]);

  return (
    <Box className="popover-address">
      <Typography.Paragraph className="flx-center address-text-wrap mb-0">
        <EllipsisMiddleCommon className="address-text" text={address} preffixCount={14} suffixCount={4} />
        <CopyIcon value={address} />
      </Typography.Paragraph>
      <Box className="flx-center info-address m-tb-10">
        <img className="icon-address mr-16" src={getFullPathByEndpoint(infoNetwork?.url)} alt="Icon adrress" />
        <Box className="info-balance">
          <Typography.Paragraph className="balance-txt">{t('header.balance')}</Typography.Paragraph>
          <Typography.Paragraph className="mb-0 total-n1">{renderAmountWithZero(balance, false)} N1</Typography.Paragraph>
        </Box>
      </Box>
      <Typography.Link href="/my-transaction" className="my-transaction-wrap">
        {t('header.my_transactions')}
      </Typography.Link>
      <hr />
      <Box onClick={onDisconectWallet} className="flx-center disconnect-wrap align-left mt-16 mb-0">
        <IconDisconnect /> <Typography.Text className="ml-8">{t('header.disconnect')}</Typography.Text>
      </Box>
    </Box>
  );
};
