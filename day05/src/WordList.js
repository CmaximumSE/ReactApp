import React, { useState } from 'react'

export default function WordList({words, onDeleteWord}) {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const wordsBySubject = words.reduce((acc, word)=>{
        acc[word.subject]=[...(acc[word.subject] || []), word]
        console.log(`words.reduce=>`, acc[word.subject]);
        return acc
    },{});

    const filterdWords = words.filter(word => {
        if(selectedSubject && word.subject !== selectedSubject) {
            return false; 
        }

        if(searchQuery && word.command.toLowerCase().includes(searchQuery.toLowerCase())){
            return false;
        }

        return true; 
    })

    console.log('wordsBySubject => ',wordsBySubject);
    const subjects = Object.keys(wordsBySubject)
    console.log('Object.keys => ', subjects);
    
  return (
    <div>
        <div>
            <label>
                과목선택 : 
                <select value={selectedSubject} onChange={ e => setSelectedSubject(e.target.value) }>
                    <option value=''>All</option>
                    {subjects.map(subject=>(
                        <option key={subject} value={subject}>
                            {subject}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                검색 : <input type='text' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} ></input>
            </label>
        </div>
      {
        filterdWords.map((word, i) => (
            <>
                {i === 0 ? selectedSubject ? <h2>{word.subject}</h2> : <h2>All</h2> : null}
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
