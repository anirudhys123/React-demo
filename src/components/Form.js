import React from 'react'
import './Form.css'
function Form() {
  return (
    <>
     <fieldset>
    <legend> Personal Info</legend>
    <dl>
      <dt> First Name</dt>
      <dd> Dheeraj</dd>
      <dt> Last Name</dt>
      <dd> Lakkapragada</dd>
      <dt> Age</dt>
      <dd> 19</dd>
    </dl>
  </fieldset>
  <fieldset>
    <legend> College Info</legend>
    <dl>
      <dt> College Name: </dt>
      <dd> SRM</dd>
      <dt> Location : </dt>
      <dd> AP</dd>
      <dt> Branch</dt>
      <dd> CSE</dd>
    </dl>
  </fieldset>
    </>
  )
}

export default Form