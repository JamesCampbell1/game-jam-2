import { Group, Paper, Progress, Text } from "@mantine/core";

type CashDisplayProps = {
  text: string;
  value: number;
  icon: React.ReactNode;
};

export const BarDisplay = ({ text, value, icon }: CashDisplayProps) => {
  return (
    <Paper style={{ height: "100%" }}
    withBorder p="md" radius="md">
      <Group justify="space-between">
        <Text>{text}</Text>
        {icon}
      </Group>

      <Progress.Root mt="md" size="xlg" radius="xl">
        <Progress.Section value={value} color="yellow">
          <Progress.Label>{value}%</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Paper>
  );
};
