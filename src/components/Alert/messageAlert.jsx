import { Typography } from 'antd';
import React from 'react';
import { TOKEN_FULL_NAME } from '../../common/constant';
import { IconInfoMessage } from '../../resources/icons/icon_info_message';
import { IconWraningLarge } from '../../resources/icons/icon_warning_large';
import { IconWarningSmall } from '../../resources/icons/warning_small';

export const messWarningConnectWallet = t => {
  return (
    <Typography.Paragraph className="flx-center mess-alert-1">
      <IconWarningSmall />
      {t('alert.warning_conncet_wallet')}
    </Typography.Paragraph>
  );
};

export const messageNoteSupportNetWork = (t, tokenName = '') => {
  return (
    <Typography.Paragraph className="flx-center mb-0 align-left">
      <IconWraningLarge />
      <Typography.Text className="mess-alert-2 txt-message-left">
        <div
          dangerouslySetInnerHTML={{
            __html: t('alert.warning_note_support_network', { tokenName, tokenFullName: TOKEN_FULL_NAME[tokenName] }),
          }}
        />
      </Typography.Text>
    </Typography.Paragraph>
  );
};

export const messageNoteSupportTransactionDetail = t => {
  return (
    <Typography.Paragraph className="flx-center message-alert-note mb-0 align-left">
      <IconInfoMessage />
      <Typography.Text className="mess-alert-2 txt-message-left">
        <div
          dangerouslySetInnerHTML={{
            __html: t('alert.warning_note_support_transaction_detail'),
          }}
        />
      </Typography.Text>
    </Typography.Paragraph>
  );
};
