import { useState, useRef, useEffect } from 'react';

import Card from './UI/Card';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const inputUserRef = useRef();
  const inputAgeRef = useRef();

  useEffect(() => {
    inputUserRef.current.focus();
  }, []);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name (non-empty values).',
      });
      return;
    }
    if (age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
    inputUserRef.current.focus();
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    if (username.trim().length === 0) {
      inputUserRef.current.focus();
    } else if (age.trim().length === 0) {
      inputAgeRef.current.focus();
    } else {
      inputAgeRef.current.focus();
    }
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>User Name</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={usernameChangeHandler}
            ref={inputUserRef}
          />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            value={age}
            onChange={ageChangeHandler}
            ref={inputAgeRef}
          />
          <Button type='submit'>Confirm</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
