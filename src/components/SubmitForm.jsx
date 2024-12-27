import React from 'react'

const SubmitForm = () => {

  const submit = e => {
    
    e.preventDefault()
    console.log(e.target.text.value)
    console.log(e.target.email.value)
    console.log(e.target.password.value)
  }

  return (
    <div className='border-4'>
      <form onSubmit={submit}>
        <input className='border-4 border-green-600 m-5 outline-none' type="text" name='text' placeholder='Enter a name' /> <br />
        <input className='border-4 border-green-600 m-5 outline-none' type="email" name="email" placeholder='Enter a email' /> <br />
        <input className='border-4 border-green-600 m-5 outline-none' type="password" name="password" placeholder='Enter a password' /> <br />
        <input className='bg-green-300 m-2 p-2 rounded-2xl cursor-pointer' type="submit" value="Submit" /> <br />
      </form>
    </div>
  )
}

export default SubmitForm