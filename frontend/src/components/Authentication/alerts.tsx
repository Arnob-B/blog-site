import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
function StatusRenderer({st}:any){
  switch(st){
    case(0):{
      return
      (
        <div></div>
      );
    }
    case(1):{
      return(
        <div>
          <Alert status='error'>
            <AlertTitle>MailExist</AlertTitle>
            <AlertDescription>The Email Id is already present</AlertDescription>
          </Alert>
        </div>
      )
    }
    case(2):{
      return(
        <div>
          <Alert status='error'>
            <AlertTitle>UserExit</AlertTitle>
            <AlertDescription>The Username is already present</AlertDescription>
          </Alert>
        </div>
      )
    }
    case(3):{
      return(
        <div>
          <Alert status='success'>
            <AlertTitle>success</AlertTitle>
          </Alert>
        </div>
      )
    }
  }
}
export default StatusRenderer;