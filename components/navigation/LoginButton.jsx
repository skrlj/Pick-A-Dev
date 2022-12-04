import Link from 'next/link'

function LoginButton({className, ...props}) {
    return ( 
        <Link href="/login" className={`hidden ${className} w-[130px] text-cyan-50 font-semibold uppercase`}>
            Login
        </Link>
     );
}

export default LoginButton;