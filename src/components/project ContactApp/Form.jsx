import React, { useState} from "react";
import ContactList from "./ContactList";
import { v4 } from "uuid";

export default function Form() {
  const [alert, setAlert] = useState(false);
  const [contacts, setContacts] = useState([]);

  const inputs=[
    {type:"text",name:"username",placeholder:"Name"},
    {type:"text",name:"lastname",placeholder:"Lastname"},
    {type:"email",name:"email",placeholder:"example@gmail.com"},
    {type:"number",name:"number",placeholder:"PhoneNumber"},
  ]
  const classInput="px-4 py-3 w-[48%] max-xl:w-full placeholder:text-[#5e5d5d] rounded-2xl border-gray-400 border-2  outline-none";


  const [form, setForm] = useState({
    id:"",
    username: "",
    lastname: "",
    email: "",
    number: "",
  });

  function eventHandlder(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  }

  function loginButton(event) {
    event.preventDefault();
    if (!form.username || !form.lastname || !form.email || !form.number) {
      setAlert(true);
      return;
    }

    setAlert(false)
    const newContact={...form,id:v4()}
    setContacts((contacts) => [...contacts, newContact]);
    setForm({
      id:"",
      username: "",
      lastname: "",
      email: "",
      number: "",
    });
  }

  function deleteHandler(id){
    const newContacts= contacts.filter((item)=>item.id!==id)
    setContacts(newContacts);
  }
  return (
    <>
      <div className="flex flex-col p-5 sm:px-10 md:px-40 lg:px-80 w-full ">
        <div className="flex flex-col flex-nowrap border-[rgba(0,0,0,0.05)] border-[0.5px] items-center justify-center shadow-xl shadow-blue-200 rounded-4xl ">
          <form
            className="flex justify-center text-wrap items-center xl:px-24 xl:py-16 p-4 flex-wrap gap-x-5 gap-y-10"
            onSubmit={loginButton}
          >
            {
              inputs.map((inputs,index)=>(<input className={classInput} key={index} type={inputs.type} name={inputs.name} placeholder={inputs.placeholder} value={form[inputs.name]}  onChange={eventHandlder}/>))
            }
           
            <button
              type="submit"
              className="w-full  bg-blue-600 hover:bg-blue-800  transition-all duration-100 ease-in-out  rounded-2xl p-3 text-white cursor-pointer text-xl"
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex w-full my-12 justify-center items-center">
          <div
            className={
              alert
                ? "flex w-full bg-red-100 p-3 rounded-xl text-red-700 "
                : "hidden"
            }
          >
            Please enter valid data!
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h2 className="text-4xl text-blue-800 font-semibold">Contacts List</h2>
          <ContactList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
      </div>
    </>
  );
}
