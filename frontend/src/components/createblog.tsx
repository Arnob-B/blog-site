import { useState } from "react";
import { Textarea } from '@chakra-ui/react'
import { Accordion ,AccordionButton,AccordionIcon,AccordionItem, AccordionPanel} from "@chakra-ui/react";
import { Card,CardBody,CardHeader } from "@chakra-ui/react";
import Markdown  from "react-markdown";
const Test=()=>{
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
const RenderMD=({content})=>{
  const md = <Markdown>{content}</Markdown> ;
  console.log(md)
  return (
    <div>
      <Card variant='outline'>
        <CardBody>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                Preview
                <AccordionButton />
              </AccordionButton>
              <AccordionPanel>
                {md}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </CardBody>
      </Card>
    </div>
  )
}

const CreateBlog=()=>{
  const [blogname, setblogname]  = useState("");
  const [content, setcontent]  = useState("");
  const submit = ()=>{
    console.log(blogname, content)
  }
  return(
    <div>
      <h1>hello world</h1>
      <h2>hello world</h2>
      {/* <div>
        <input type="text" placeholder="Name" value={blogname} onChange={(e) => setblogname(e.target.value)} />
      </div>
      <div>
        <Textarea placeholder='Here is a sample placeholder' value={content} onChange={e=>{
          setcontent(e.target.value);
        }} />
      </div>
      <RenderMD content={content}/>
      <div>
          <button onClick={submit}>Submit</button>
      </div> */}
    </div>
  )
}
export default CreateBlog;