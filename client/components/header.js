import Link from 'next/link';

export default ({ currentUser} ) => {
   const links = [
       !currentUser && {label: '회원가입', href: '/auth/signup'},
       !currentUser && {label: '로그인', href: '/auth/signin'},
       currentUser && {label: '티켓 판매', href: '/tickets/new'},
       currentUser && {label: '주문내역', href: '/orders'},
       currentUser && {label: '로그아웃', href: '/auth/signout'}
   ]
   .filter(linkConfig => linkConfig)
   .map(({label, href}) => {
        return <li key={href} className="nav-item">
              <Link href={href}>
              <a className="nav-link">{label}</a>
              </Link>
            </li>
   });
   
   
   return <nav className="nvbar navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">TICKETING</a>
            </Link>

            <div className="d-flex justify-content-end">
                <ul className="nav d-flex al align-items-center">
                    {links}
                </ul>
            </div>
        </nav>

};