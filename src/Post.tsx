import axios from "axios";
import { useState } from "react"

export const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [date, setDate] = useState('');

  const handleClick = () => {
    axios.post('http://localhost:3000/articles', {
      title, description, date,
    });
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">자 드가자</h1>
      <input onChange={(e) => setTitle(e.target.value)} value={title} className="border-b-2 border-b-slate-400 w-full mb-2" type="text" placeholder="제목"/>
      <input onChange={(e) => setDesc(e.target.value)} value={description} className="border-b-2 border-b-slate-400 w-full mb-2" type="text" placeholder="내용"/>
      <input onChange={(e) => setDate(e.target.value)} value={date} className="border-b-2 border-b-slate-400 w-full mb-2" type="text" placeholder="시간"/>
      <button onClick={handleClick} className="bg-white border-slate-400">드가자</button>
    </div>
  )
}