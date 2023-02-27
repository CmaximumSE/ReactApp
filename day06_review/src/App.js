import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import './App.css';
function App() {
    const [data, setData] = useState([]);
    const idRef = useRef(1)


    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())


        const initData = res.slice(0, 20).map((list) => {
            return {
                title: list.email,
                content: list.body,
                emotion: Math.floor(Math.random() * 5) + 1,
                create_date: new Date().getTime() + 1,
                id: idRef.current++
            };
        });
        setData(initData);

    }

    useEffect(() => {
        getData()
    }, []);

    const onCreate = useCallback(
        (title, content, emotion) => {
            const create_date = new Date().getTime()
            const newItem = {
                title,
                content,
                emotion,
                create_date,
                id: idRef.current
            }
            idRef.current += 1
            setData(data => [newItem, ...data])
        }, [],
    );
    
    const onRemove = useCallback((targetId) => {
            setData(data => data.filter((item) => item.id !== targetId));
        }, []
    );
    
    const onEdit = useCallback((targetId, newContent) => {
            setData(data => data.map(list => list.id === targetId ? { ...list, content: newContent } : list));
        }, []
    );
    
    const getReviewAnalysis = useMemo(() => {
    
        if(data.length===0){
            return{
                goodCount:0, badCount:0, goodRatio:0
            }
        }
        console.log('Review 분석');

        const goodCount=data.filter(list=>list.emotion>=3).length
        const badCount=data.length-goodCount
        const goodRatio=(goodCount/data.length)*100
        return{goodCount,badCount,goodRatio}
    }, [data.length]);
    const {goodCount, badCount, goodRatio}=getReviewAnalysis
    
    return (
        <div className="App">
            <ReviewForm onCreate={onCreate} />
            <div>전체 Review : {data.length}</div>
            <div>좋은 Review 갯수 :{goodCount}</div>
            <div>나쁜 Review 갯수 :{badCount}</div>
            <div>좋은 Review 비율 :{goodRatio}</div>

            <ReviewList reviewList = {data} onRemove = {onRemove} onEdit = {onEdit} />
        </div>
    );
}

export default App;