import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useTheme } from "@material-ui/core/styles";
import { Form, Formik } from 'formik';

import MultipleFileUploadArea from './MultipleFileUploadArea';

function UploadArea() {
  const theme = useTheme();

  return (
    <Card sx={{
      width: '100%',
      height: '100%',
      borderRadius: '45px',
      backgroundColor: theme.palette.LIGHT_GREY.main,
    }}>
      <CardContent>
        <Formik
          initialValues={{}}
          onSubmit={() => {}}
        >
          {({ values, errors, isValid, isSubmitting }) => (
            <Form>
              <Grid container spacing={2} direction="column">
                <MultipleFileUploadArea name="files" />
              </Grid>

              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

export default UploadArea;