import React, { useState, useEffect, useContext } from "react";
import ContentContext from "./contentContext";
import useContentful from "../../hooks/useContentful";
import locaContext from "../localization/locaContext";

const ContentProvider = ({ children }) => {
  const { lang } = useContext(locaContext);
  const contentfulClient = useContentful();

  const [isLoading, setIsLoading] = useState(true);
  const [staticPages, setStaticPages] = useState(null);
  const [localizedStrings, setLocalizedStrings] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetchContent();

    setIsLoading(false);
    // eslint-disable-next-line
  }, [lang]);

  const fetchContent = () => {};

  const getLocalizedString = (key) =>
    localizedStrings && localizedStrings[key] ? localizedStrings[key] : key;

  return (
    <ContentContext.Provider
      value={{ isLoading, staticPages, getLocalizedString }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
