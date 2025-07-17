import {Card, Container, createTheme, Paper, rem, Select, Button, ActionIcon} from "@mantine/core";
import type {MantineThemeOverride} from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem("200px"),
    xs: rem("300px"),
    sm: rem("400px"),
    md: rem("500px"),
    lg: rem("600px"),
    xl: rem("1400px"),
    xxl: rem("1600px"),
};

export const mantineTheme: MantineThemeOverride = createTheme({
    colors: {
        dark: [
            "#f2f4fc",
            "#f2f4fc",
            "#f2f4fc",
            "#f2f4fc",
            "#f2f4fc",
            "#f2f4fc",
            "#717171",
            "#141414",
            "#f2f4fc",
            "#f2f4fc",
        ],
    },
    fontSizes: {
        xs: rem("12px"),
        sm: rem("14px"),
        md: rem("16px"),
        lg: rem("18px"),
        xl: rem("20px"),
        "2xl": rem("24px"),
        "3xl": rem("30px"),
        "4xl": rem("36px"),
        "5xl": rem("48px"),
    },
    spacing: {
        "3xs": rem("4px"),
        "2xs": rem("8px"),
        xs: rem("10px"),
        sm: rem("12px"),
        md: rem("16px"),
        lg: rem("20px"),
        xl: rem("24px"),
        "2xl": rem("28px"),
        "3xl": rem("32px"),
    },
    primaryColor: "blue",
    components: {
        Container: Container.extend({
            vars: (_, {size, fluid}) => ({
                root: {
                    "--container-size": fluid ? "100%" : size !== undefined && size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : rem(size),
                },
            }),
        }),
        Paper: Paper.extend({
            defaultProps: {
                p: "md",
                shadow: "xl",
                radius: "md",
                withBorder: false,
            },
        }),
        Card: Card.extend({
            defaultProps: {
                p: "xl",
                shadow: "xl",
                radius: "var(--mantine-radius-default)",
                withBorder: false,
            },
        }),
        Select: Select.extend({
            defaultProps: {
                checkIconPosition: "right",
            },
        }),
        Button: Button.extend({
            defaultProps: {
                variant: "gradient",
                gradient: {
                    from: "#24b4b0",
                    to: "#2475b4",
                    deg: 60,
                },
                radius: "sm",
            },
        }),
        ThemeIcon: ActionIcon.extend({
            defaultProps: {
                variant: "gradient",
                gradient: {
                    from: "#24b4b0",
                    to: "#2475b4",
                    deg: 60,
                },
                size: "xl",
            },
        }),
        ActionIcon: ActionIcon.extend({
            defaultProps: {
                variant: "gradient",
                gradient: {
                    from: "#24b4b0",
                    to: "#2475b4",
                    deg: 60,
                },
                size: "xl",
            },
        }),
    },
    other: {style: "mantine"},
});