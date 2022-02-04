import { Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import MainLayout from '../../components/MainLayout';
import { FormInputs } from '../../components/formBuilder/inputs';

const title = 'India Form';
const formInputs = [
  {
    id: 0,
    name: 'date',
    text: 'Date of gathering:',
    type: 'date',
  },
  {
    id: 1,
    name: 'location',
    text: 'Select your location:',
    type: 'select',
    options: [
      {
        id: 0,
        text: 'East Godavari',
      },
      {
        id: 1,
        text: 'West Godavari',
      },
      {
        id: 2,
        text: 'Telangana',
      },
      {
        id: 3,
        text: 'Krishna River District',
      },
      {
        id: 4,
        text: 'KANN',
      },
      {
        id: 5,
        text: 'North',
      },
    ],
  },
  {
    id: 2,
    name: 'name',
    text: 'Select your name:',
    type: 'select',
    options: [
      {
        id: 0,
        text: 'Test Person',
      },
      {
        id: 1,
        text: 'Another Person',
      },
    ],
  },
  {
    id: 3,
    name: 'worshipAttendance',
    text: 'How many people in worship?',
    type: 'group',
    inputs: [
      {
        id: 0,
        name: 'worshipAttendance-adults',
        text: 'Adults',
        type: 'number',
      },
      {
        id: 1,
        name: 'worshipAttendance-children',
        text: 'Children',
        type: 'number',
      },
    ],
  },
  {
    id: 4,
    name: 'bibleStudyAttendance',
    text: 'How many people in Bible study?',
    type: 'group',
    inputs: [
      {
        id: 0,
        name: 'bibleStudyAttendance-adults',
        text: 'Adults',
        type: 'number',
      },
      {
        id: 1,
        name: 'bibleStudyAttendance-children',
        text: 'Children',
        type: 'number',
      },
    ],
  },
  {
    id: 5,
    name: 'baptisms',
    text: 'How many people were baptized?',
    type: 'group',
    inputs: [
      {
        id: 0,
        name: 'baptisms-adults',
        text: 'Adults',
        type: 'number',
      },
      {
        id: 1,
        name: 'baptisms-children',
        text: 'Children',
        type: 'number',
      },
    ],
  },
  {
    id: 6,
    name: 'communionAttendance',
    text: 'How many people received Holy Communion?',
    type: 'number',
  },
  {
    id: 7,
    name: 'offerings',
    text: 'How much was given in offerings?',
    type: 'number',
  },
];

export default function Form() {
  return (
    <MainLayout
      title={title}
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
        Form questions
      </Typography>

      <FormInputs formInputs={formInputs} />
    </MainLayout>
  );
}
