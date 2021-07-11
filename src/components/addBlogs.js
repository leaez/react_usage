import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import tw, { styled } from 'twin.macro';
import HxInput from './HxInput';
/*
const generateMenus = (data, onSelect) => {
  return data.map((item, i) => {
    return <LHxInput key={i} type={item.type} />;
  });
};*/

const AddBlog = () => {
  const [typeValue, setValue] = React.useState('p');
  const [iEdit, setiEdit] = React.useState(0);
  var blog = [
    { type: 'h1', contents: 'xxx' },
    { type: 'h1', contents: 'yyy' },
  ];
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const onSetValue = (type, contents) => {
    console.log(type, contents);
  };

  const onEdit = (i) => {
    setiEdit(i);
    console.log(i);
  };
  const onAdd = () => {
    blog.splice(iEdit, 0, { type: 'h1', contents: 'zzz' });
    console.log(blog);
  };
  const onDelet = () => {
    console.log('delet');
  };
  const onDown = () => {
    console.log('xdd');
  };
  const onUp = () => {
    console.log('xdd');
  };
  const options = [
    { key: 1, value: 'h', label: 'h' },
    { key: 2, value: 'p', label: 'p' },
    { key: 3, value: 'img', label: 'img' },
  ];

  return (
    <div>
      <div>
        <RadioGroup
          row
          value={typeValue}
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
        <IconButton onClick={onAdd} aria-label="delete">
          <AddCircleOutlineIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={onDelet}>
          <HighlightOffIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={onDown}>
          <ArrowDownwardIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={onUp}>
          <ArrowUpwardIcon fontSize="small" />
        </IconButton>
      </div>
      {blog.map((item, i) => {
        return (
          <div key={i}>
            <HxInput
              index={i}
              hidden={i != iEdit}
              iType={item.type}
              iContents={item.contents}
              onSetValue={onSetValue}
              onEdit={onEdit}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AddBlog;
