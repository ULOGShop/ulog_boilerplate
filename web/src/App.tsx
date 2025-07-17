import React from "react"

import {MantineProvider} from "@mantine/core";
import {MantineEmotionProvider} from "@mantine/emotion";
import {isEnvBrowser} from "./utils/misc";

import {mantineTheme} from "./theme/theme"

import Dev from "./features/dev/index";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const App: React.FC = () => {
    return (
        <MantineEmotionProvider>
            <MantineProvider defaultColorScheme="dark" theme={mantineTheme}>
                {isEnvBrowser() && <Dev/>}
            </MantineProvider>
        </MantineEmotionProvider>
    );
};

export default App;