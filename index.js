```javascript
// pages/about.js
import {useRouter} from 'next/router';
export default function About(){
    const router = useRouter();
    const handleClick = ()=>{ 
        router.replace('/'); // Changed from router.push to router.replace
    };
    return(
        <div>
            <h1>About Page</h1>
            <button onClick={handleClick}>Go to Home</button>
        </div>
    );
}
```
Replacing `router.push` with `router.replace` prevents the unexpected behavior and ensures reliable navigation between pages in Next.js 15.