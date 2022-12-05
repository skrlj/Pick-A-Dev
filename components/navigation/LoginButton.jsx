import Link from 'next/link'
import { LogInLogo } from '../icons';

function LoginButton({className, ...props}) {
    return ( 
        <Link href="/login">
            <LogInLogo className="w-6 fill-cyan-50"/>
        </Link>
     );
}

export default LoginButton;