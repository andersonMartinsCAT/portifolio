import { cards } from "@/mock/kanban";
import Board from "./board";
import Card from "./card";
import Column from "./column";
import { Box } from "@mui/material";



export default function Kanban() {
  const columns: { [key: string]: JSX.Element[] } = {
    todo: [],
    doing: [],
    done: [],
  };

  cards.forEach((card) => {
    const { state, title, text } = card;

    columns[state].push(
      <Card key={`${state}-${title}`} title={title} text={text} />
    );
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
      <Board>
        {Object.entries(columns).map(([state, cards]) => (
          <Column key={state} title={state as 'todo' | 'doing' | 'done'}>
            {cards}
          </Column>
        ))}
      </Board>
    </Box>
  );
};
