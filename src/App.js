import React, { useContext, useEffect } from "react";
import Axios from "axios";
import MainLayout from "./layouts/_MainLayout";
import LoadingScreen from "./components/loading/LoadingScreen";
import globalContext from "./context/global/globalContext";
import Routes from "./components/routing/Routes";
import contentContext from "./context/content/contentContext";
import Text from "./components/typography/Text";
import modalContext from "./context/modal/modalContext";
import config from "./clientConfig";

import tableContext from "./context/table/tableContext";
import "./app_tail.css";
// import "./app.css";

const App = () => {
  const { isLoading, chipsAmount, setChipsAmount, setIsLoading } =
    useContext(globalContext);

  const { openModal, closeModal } = useContext(modalContext);

  function showFreeChipsModal() {
    openModal(
      () => <Text textAlign="center">You have to charge the chip</Text>,
      "Free Chip",
      "Close",
      handleFreeChipsRequest
    );
  }

  const handleFreeChipsRequest = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.token;
      alert(config.serverURI);

      const res = await Axios.get(
        "http://" + config.serverURI + "/api/chips/free",
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      const { chipsAmount } = res.data;

      setChipsAmount(chipsAmount);
    } catch (error) {
      alert(error);
    } finally {
      closeModal();
    }

    setIsLoading(false);
  };

  useEffect(() => {
    chipsAmount !== null &&
      chipsAmount < 1000 &&
      setTimeout(showFreeChipsModal, 2000);

    // eslint-disable-next-line
  }, [chipsAmount]);

  return (
    <MainLayout>
      <Routes
        chipsAmount={chipsAmount}
        setChipsAmount={setChipsAmount}
        setIsLoading={setIsLoading}
      />
    </MainLayout>
  );
};

export default App;
