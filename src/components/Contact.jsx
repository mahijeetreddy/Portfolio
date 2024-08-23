import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import Earth from './canvas/Earth'
import '@fortawesome/fontawesome-free/css/all.min.css';



const Contact = () => {
const formRef = useRef();
const [form, setForm] = useState({
  name: '',
  email:'',
  message: '',
});
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
const { name, value } =e.target;
setForm({...form,[name]: value})



}
const handleSubmit = (e) => {
e.preventDefault();
setLoading(true);



emailjs.send('service_tzktv6v',
  'template_wru4yjo',
  {
    from_name:form.name,
    to_name:'Mahijeet Reddy',
    from_email: form.email,
    to_email:'mahijeet1127@gmail.com',
    message: form.message
  },
  'wjdseeLaT6Vd8Byvu',
)
.then(()=> {
  setLoading(false),
  alert('Thank you, I will get back to you!');

  setForm({
    name: '',
    email:'',
    message:'',
  })
}, (error) => {
  setLoading(false)
  console.log(error);
  alert('Something went wrong');
})



}

  return (
    <div>
    <div
    className='xl:mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden'>
<motion.div
variants={slideIn('left', "tween" , 0.2, 1)}
className=" flex-[0.75] bg-black-100 p-8 rounded-2xl">
<p className={styles.sectionSubText}>Get in touch</p>  
<h3 className={styles.sectionHeadText}>Contact.</h3>

<form ref={formRef}
className='mt-12 flex flex-col gap-8'
onSubmit={handleSubmit}
>

  <label className='flex flex-col'>
    <span className="text-white font-medium mb-4"> Your Name</span>
    <input type="text" 
    name= "name"
    value={form.name}
    onChange={handleChange}
    placeholder='What is your name?'
    className='bg-tertiary py-4 px-6 placeholder: text-secondary
    text-white rounded-lg outlined-none border-none font-medium'

/>
  </label>
  <label className='flex flex-col'>
    <span className="text-white font-medium mb-4"> Your Email</span>
    <input type="email" 
    name= "email"
    value={form.email}
    onChange={handleChange}
    placeholder='What is your email?'
    className='bg-tertiary py-4 px-6 placeholder: text-secondary
    text-white rounded-lg outlined-none border-none font-medium'

/>
  </label>
  <label className='flex flex-col'>
    <span className="text-white font-medium mb-4"> Your Message</span>
    <textarea 
    rows="7"
    name= "message"
    value={form.message}
    onChange={handleChange}
    placeholder='What do you want to say?'
    className='bg-tertiary py-4 px-6 placeholder: text-secondary
    text-white rounded-lg outlined-none border-none font-medium resize-none'

/>
  </label>


  <button type='submit'
  className='bg-tertiary py-3 px-8 font-bold
  outline-none w-fit text-white shadow-md shadow-primary rounded-xl'
  
  
  
  >
{loading? 'Sending...' : 'Send'}

  </button>


</form>


</motion.div>


<motion.div 
variants={slideIn('right', "tween" , 0.2, 1)}
className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
>
<EarthCanvas />


</motion.div>

    </div>

    <div className="mt-20 flex flex-col mb-[-3rem] items-center justify-center text-center space-y-2">
  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">
    &copy; 2024 Mahijeet Reddy
  </p>
  <div className="flex space-x-4">
    <a
      href="https://github.com/mahijeetreddy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/mahijeet-reddy-gaddam/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      href="mailto:mahijeet1127@gmail.com"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <i className="fas fa-envelope"></i>
    </a>
  </div>
  <a
      href="/Resume.pdf"
      download="Resume.pdf"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <i className="fas fa-download"> <span> Resume</span></i>
    </a>
</div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact");