import Link from 'next/link'
import { GitHubLogo } from '../icons';

function GitHubLink() {
    return ( 
      <Link href="https://github.com/skrlj/Pick-A-Dev" passHref={true} target="_blank"> 
        <GitHubLogo className="w-7 fill-cyan-50"/>
      </Link>
     );
}

export default GitHubLink;