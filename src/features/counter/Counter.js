import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync
} from './counterSlice';

export default function Counter() {
  const count = useSelector();
  const dispatch = useDispatch();

  return (
    <div>
     Counter
    </div>
  );
}
