import React from 'react'
import CodeEditor from './CodeEditor'

export default function Editor() {
    const data={
        id:1,
        name:"Two Sum",
        description:<p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.<br />
         You may assume that each input would have <span className='fw-bolder'> exactly one solution </span>, and you may not use the same element twice.
         You can return the answer in any order.
         </p>,

sample:[{input:'nums = [2,7,11,15], target = 9 ',output:'[0, 1]'},{input:'nums = [3,2,4], target = 6',output:'[1,2]'}]

    }
  return (
    <div className='d-md-flex flex-row-reverse p-3 gap-3'>
        <div className="editor rounded-3 overflow-hidden col-md-6">
            <CodeEditor />
            <div style={{height:'100%'}} className='actions rounded-3 bg-light mt-2 p-3'>
                Actions tab
            </div>
        </div>
        <div className="question">
            <div className="bg-gray tabs">
                <p className='fw-medium pb-0 mb-0'> <i className='bi bi-filetype-pdf fw-bolder text-primary'></i>Description</p>
            </div>
            <div style={{height:'90vh',overflow:'scroll'}} className="q p-3 bg-light">
                <h4> {data.id+". "+data.name}</h4>
                <p>{data.description}</p>
                <div className="sample">
                    {
                        data.sample.map((e,i)=>{
                            return(
                                <>
                                    <p className="fw-bolder">Example {i+1} </p>
                                    <p className='fw-bolder'>Input : <span className='fw-normal'>{e.input}</span></p>
                                    <p className='fw-bolder'>Output : <span className='fw-normal'>{e.output}</span></p>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
