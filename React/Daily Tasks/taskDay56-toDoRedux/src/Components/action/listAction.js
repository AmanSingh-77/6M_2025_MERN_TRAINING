import { toast } from 'react-toastify';


export const add=(list)=>{    
        toast.success('LIST ADDED !!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        });

    return {type:"ADD", payload:list}
}
