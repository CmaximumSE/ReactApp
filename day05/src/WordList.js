import React, { useState } from 'react'

export default function WordList({words, onDeleteWord}) {
    const [selectedSubject, setSelectedSubject] = useState('');

    const wordsBySubject = words.reduce((acc, word)=>{
        acc[word.subject]=[...(acc[word.subject] || []), word]
        console.log(`words.reduce=>`, acc[word.subject]);
        return acc
    },{})

    console.log('wordsBySubject=>',wordsBySubject);
    const subjects = Object.keys(wordsBySubject)
    console.log('Object.keys=>', subjects);
    
  return (
    <div>
        <div>
            <label>
                과목선택 : 
                <select value={selectedSubject} onChange={ e=>selectedSubject(e.target.value) }>
                    <option value=''> All </option>
                    {subjects.map(subject=>(
                        <option key={subject} value={subject}>
                            {subject}
                        </option>
                    ))}
                </select>
            </label>
        </div>
      {
        words.map(word=>(
            <>
                <div className='list' key={word.id}>
                    <p className='command'>{word.command}</p>
                    <p className='def'>{word.definition}</p>
                    <button onClick={()=> onDeleteWord(word.id)}>삭제</button>
                </div>
            </>
        ))
      }
    </div>
  )
}
