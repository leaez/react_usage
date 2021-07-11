import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const RadioType = ({ hidden, typeValue, options, onSetValue }) => {
  const handleRadioChange = (event) => {
    onSetValue(event.target.value);
  };

  return hidden ? (
    <></>
  ) : (
    <>
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup
        row
        value={typeValue}
        aria-label="position"
        name="type"
        defaultValue="h1"
        onChange={handleRadioChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.key}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
            labelPlacement="top"
          />
        ))}
      </RadioGroup>
    </>
  );
};
RadioType.propTypes = {
  hidden: PropTypes.bool,
  typeValue: PropTypes.string,
  options: PropTypes.array,
  onSetValue: PropTypes.func,
};

const validationSchema = yup.object({
  email: yup.string('Enter your email').required('Email is required'),
  content: yup
    .string('Enter your content')
    .min(1, 'content should be of minimum 8 characters length')
    .required('content is required'),
});

const StyledInput = styled.textarea(({ hasBorder }) => [
  `color: black;`,
  hasBorder == 'h3'
    ? tw`text-xl`
    : hasBorder == 'h1'
    ? tw`text-5xl`
    : hasBorder == 'h2'
    ? tw`text-3xl`
    : tw`text-lg`,
]);

const AddBlog = () => {
  const [typeValue, setValue] = React.useState('p');
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      content: 'foobar',
      type: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      //alert(JSON.stringify(values, null, 2));
    },
  });
  const onSetValue = (v) => {
    setValue(v);
  };
  const onBlur = (v) => {
    console.log(v);
  };
  //console.log(typeValue);
  const options = [
    { key: 1, value: 'h1', label: 'h1' },
    { key: 2, value: 'h2', label: 'h2' },
    { key: 3, value: 'h3', label: 'h3' },
    { key: 4, value: 'p', label: 'p' },
  ];

  const optis = {
    hidden: true,
    options,
    typeValue,
    onSetValue: (v) => {
      formik.values.type = v;
      setValue(v);
      console.log(typeof v);
    },
  };
  const bgx = 'text-5xl';
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="type"
          name="type"
          type="hidden"
          onChange={formik.handleChange}
          value={formik.values.type}
        />
        <RadioType {...optis} />
        <label htmlFor="lastName">Last Name</label>
        <StyledInput
          hasBorder={typeValue}
          css={[tw`bg-gray-200 bg-opacity-10 border-none`]}
          id="lastName"
          name="lastName"
          type="text"
          onBlur={onBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          tw="bg-green-400 text-5xl"
          fullWidth
          id="content"
          name="content"
          label="content"
          type="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          error={formik.touched.content && Boolean(formik.errors.content)}
          helperText={formik.touched.content && formik.errors.content}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddBlog;
