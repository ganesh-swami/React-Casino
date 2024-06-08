import React, { useContext } from 'react';
import OfflineContext from './offlineContext';
import useServiceWorker from '../../hooks/useServiceWorker';
import modalContext from '../modal/modalContext';
import Text from '../../components/typography/Text';

const OfflineProvider = ({ children }) => {
  const { openModal } = useContext(modalContext);
  

  const [updateServiceWorker] = useServiceWorker(() => onUpdateServiceWorker());

  const onUpdateServiceWorker = () => {
    openModal(
      () => (
        <Text>service_worker-update_available</Text>
      ),
      'service_worker-update_headline',
      'service_worker-update_confirm_btn_txt',
      updateServiceWorker,
    );
  };

  return <OfflineContext.Provider>{children}</OfflineContext.Provider>;
};

export default OfflineProvider;
