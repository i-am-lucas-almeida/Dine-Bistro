import { useEffect } from "react";

const PageTitle = (title) => {

    useEffect(() => {

        const prevTitle = document.title;
        document.title = title;

        return () => {

            document.title = prevTitle;

        };

    });

};

export default PageTitle;