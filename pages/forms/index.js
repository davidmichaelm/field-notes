import {
  List, ListItem, ListItemText, Typography,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

const forms = [
  {
    id: 0,
    title: 'India Form',
  },
];

export default function Forms() {
  return (
    <MainLayout
      title="Forms"
      icon={(
        <ArticleIcon
          color="secondary"
          sx={{ fontSize: '2.5rem' }}
        />
      )}
    >
      <Typography
        variant="h5"
        color="primary"
        sx={{ mb: 1 }}
      >
        Created by you
      </Typography>
      <List sx={{
        width: '100%',
        backgroundColor: (theme) => theme.palette.grey['200'],
        borderRadius: 1,
      }}
      >
        {forms.map((form) => (
          <Link
            href={`/forms/${form.id}`}
            key={form.id}
            passHref
          >
            <ListItem
              button
            >
              <ListItemText>{form.title}</ListItemText>
            </ListItem>
          </Link>

        ))}
      </List>

    </MainLayout>
  );
}
