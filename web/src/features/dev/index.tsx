import {useState} from "react";
import {AspectRatio, ActionIcon, Drawer, Stack, Divider, Button, Image, Text, Group, Box, ThemeIcon} from "@mantine/core";
import {IoSettingsSharp, IoClose, IoCodeSlash, IoBug} from "react-icons/io5";

const Dev: React.FC = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <ActionIcon onClick={() => setOpened(true)} size="xl" radius="xl" style={{position: "absolute", bottom: 20, right: 20, width: 50, height: 50}}>
                <IoSettingsSharp style={{width: "50%", height: "50%"}} size={20}/>
            </ActionIcon>
            <Drawer onClose={() => setOpened(false)} opened={opened} title={<Group><ThemeIcon size="lg" radius="xl"><IoCodeSlash size={18}/></ThemeIcon><Text fw={700} size="lg">ULOG SHOP</Text></Group>} closeButtonProps={{icon: <IoClose size={20}/>}} offset={8} radius="sm" size="sm">
                <Box p="0 20px 20px 20px">
                    <Box mb={30}>
                        <AspectRatio ratio={16/9} mb={20}>
                            <Image radius="md" fit="contain" src="https://media.discordapp.net/attachments/1273369246516121691/1393982457740787793/ULOG_LOGO_2.png?ex=687a6cd4&is=68791b54&hm=ba207a8204b25507868bce61a93eb4392a88635647340b2563c3fc94f8db9b78&=&format=webp&quality=lossless&width=984&height=984"/>
                        </AspectRatio>
                        <Text c="dimmed" size="sm" ta="center">Development Tools & Debug Interface</Text>
                    </Box>
                    <Stack gap="md">
                        <Divider label={<Group gap="xs"><IoBug size={16}/><Text fw={500}>Debug Tools</Text></Group>} labelPosition="center"/>
                        <Button fullWidth leftSection={<IoCodeSlash size={16}/>} onClick={() => console.log("test")}>Open alert dialog</Button>
                    </Stack>
                    <Text c="dimmed" size="xs" ta="center" mt={30}>Version 1.0.0 • ULOG © 2025</Text>
                </Box>
            </Drawer>
        </>
    );
};

export default Dev;