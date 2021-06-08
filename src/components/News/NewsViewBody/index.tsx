import { useEffect } from "react";
import { apinoticia } from "../../../service/apinoticia";

export default function NewsViewBody(body: string){
    useEffect(()=>{
        async function fixNewsBody() {
            let lastPosition = 0;
            let srcPosition = body.indexOf('src=\"', lastPosition);
           
            while (srcPosition != -1) {
                let doubleQuotePosition =  body.indexOf('\"', srcPosition + 5);
        
                await apinoticia.post('imagem', JSON.parse('{"path": "' + body.substring(srcPosition + 5, doubleQuotePosition -1) + '"}')).then(response => {
                    body = body.substring(0, srcPosition - 1) + 'src=' + JSON.stringify(response.data) + body.substring(doubleQuotePosition + 1);
                }).catch(error => console.log(error));
        
                srcPosition = body.indexOf('src=\"', doubleQuotePosition);
            }
        }

        fixNewsBody();
    },[]);

    return(<div>{body}</div>);
}