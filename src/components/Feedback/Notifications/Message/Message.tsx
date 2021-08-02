// @ts-nocheck
// eslint-disable-next-line
import React, { FunctionComponent, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

// components
import { enhanceNotifications } from './enhanceMessage';

// others
import Close from '../../../../assets/icons/notifications/close.svg';
import Error from '../../../../assets/icons/notifications/error.svg';
import Info from '../../../../assets/icons/notifications/info.svg';
import Success from '../../../../assets/icons/notifications/success.svg';
import Warning from '../../../../assets/icons/notifications/warning.svg';
import { EFeedbackTypes, timeFinishedAnimation } from '../../constants';

// styles
import { EClassNames } from './classNames';
import { Message as MessageStyled } from './MessageStyled';

type TProps = {
  children: React.ReactNode;
  hideAfterTime: boolean;
  id: number;
  notificationType?: EFeedbackTypes;
  title: string;
  translate: boolean;
};

export type TInnerProps = TProps & {
  removeNotification: (id: number) => void;
};

const Message: FunctionComponent<TInnerProps> = ({
  children,
  hideAfterTime,
  id,
  notificationType = EFeedbackTypes.INFO,
  removeNotification,
  title,
}) => {
  const [visible, setVisible] = useState(true);
  const propsAnimation = useSpring({
    from: { transform: 'translateX(500px)' },
    to: { transform: 'translateX(0)' },
  });

  const getImage = (): string => {
    switch (notificationType) {
      case EFeedbackTypes.SUCCESS:
        return Success;
      case EFeedbackTypes.WARNING:
        return Warning;
      case EFeedbackTypes.ERROR:
        return Error;
      default:
        return Info;
    }
  };

  useEffect(() => {
    if (hideAfterTime) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        removeNotification(id);
      }, timeFinishedAnimation);
    }
    // eslint-disable-next-line
  }, [visible]);

  return (
    <animated.div style={propsAnimation}>
      <MessageStyled visible={visible} notificationType={notificationType}>
        {/* TOP */}
        <div className={EClassNames.TOP}>
          <img
            alt={notificationType}
            className={EClassNames.ICON}
            src={getImage()}
          />
          <p className={EClassNames.TITLE} customFont>
            {title}
          </p>
          <img
            alt="notification-close"
            className={EClassNames.CLOSE}
            onClick={() => setVisible(false)}
            src={Close}
          />
        </div>

        {/* CONTENT */}
        <p className={EClassNames.MESSAGE} customFont>
          {children}
        </p>
      </MessageStyled>
    </animated.div>
  );
};

export default enhanceNotifications(Message);
