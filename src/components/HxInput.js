import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const StyledInput = styled.textarea(({ fontSize }) => [
  fontSize == 'h3'
    ? tw`text-xl`
    : fontSize == 'h1'
    ? tw`text-5xl`
    : fontSize == 'h2'
    ? tw`text-3xl`
    : tw`text-lg`,
]);

const HxInput = ({ index, hidden, iType, iContents, onSetValue, onEdit }) => {
  //const [hidden, setHidden] = React.useState(false);
  const [contentsS, setContents] = React.useState(iContents);
  const [typeS, setType] = React.useState(iType);

  const handleRadioChange = (event) => {
    setType(event.target.value);
    onSetValue(event.target.value, contentsS);
  };
  const handleChange = (event) => {
    setContents(event.target.value);
    onSetValue(typeS, event.target.value);
  };
  /*
  const onBlur = () => {
    console.log('yyy');
    //setHidden(true);
  };*/
  const onFocus = () => {
    onEdit(index);
  };

  //console.log(typeValue);
  const options = [
    { key: 1, value: 'h1', label: 'h1' },
    { key: 2, value: 'h2', label: 'h2' },
    { key: 3, value: 'h3', label: 'h3' },
  ];
  return (
    <>
      <StyledInput
        fontSize={typeS}
        css={[tw`bg-gray-200 bg-opacity-10 `]} /*border-none*/
        id="hx"
        type="text"
        onFocus={onFocus}
        onChange={handleChange}
        value={contentsS}
      />
      {hidden ? (
        <></>
      ) : (
        <>
          <FormLabel component="legend">labelPlacement</FormLabel>
          <RadioGroup
            row
            value={typeS}
            aria-label="position"
            name="type"
            defaultValue="h2"
            onChange={handleRadioChange}>
            {options.map((option) => (
              <FormControlLabel
                key={option.key}
                value={option.value}
                control={<Radio color="primary" />}
                label={option.label}
                labelPlacement="start"
              />
            ))}
          </RadioGroup>
        </>
      )}
    </>
  );
};

HxInput.propTypes = {
  index: PropTypes.number,
  hidden: PropTypes.bool,
  iType: PropTypes.string,
  iContents: PropTypes.string,
  onSetValue: PropTypes.func,
  onEdit: PropTypes.func,
};

/******************************
 * 

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
    </div>
  );
};
*/

export default HxInput;
