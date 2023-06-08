import React from 'react'
import styles from './index.module.css'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'

interface Props extends React.HTMLProps<HTMLDivElement> { }

type DomainMeta = {
  url: string,
  link: string,
  desc: string
}

const domains: DomainMeta[] = [
  { url: 'mirrors.hust.edu.cn', link: 'https://mirrors.hust.edu.cn', desc: '双栈线路' },
  { url: 'hustmirror.cn', link: 'https://hustmirror.cn', desc: 'IPv6线路' },
]


function Domains({ domains }: { domains: DomainMeta[] }) {
  return <>
    {domains.map(u => <p key={u.url} className={styles['domain-row']}><a href={u.link}>
      {u.url}
    </a> {u.desc} </p>
    )}
  </>
}

export default function SideBar(props: Props) {
  return (
    <div {...props}>
      <div className={styles.side}>
        <a><h3><Translate>域名选择</Translate></h3></a>
        <Domains domains={domains}></Domains>

        <a><h3><Translate>镜像站帮助</Translate></h3></a>
        <p>
          <Translate>
            如果你不了解如何配置替换软件镜像源，
            这里提供了主流软件源的配置帮助：
          </Translate>
        </p>
        <Link to='/docs'>
          <button className={styles.button}>
            <Translate>
              查看帮助文档
            </Translate>
          </button>
        </Link>
        <p>
          <Translate>
            也可以通过左边的文件列表中相应源的帮助链接跳转到帮助文档。
          </Translate>
        </p>

        <a><h3><Translate>联系我们</Translate></h3></a>
        <p>
	  <a href="https://gitee.com/dzm91_hust/hust-mirrors/issues"><Translate>提交问题</Translate></a>
        </p>
        <p>
          <a href='mailto:mirror_support@hust.edu.cn'><Translate>发送邮件</Translate></a>
        </p>

        <a><h3><Translate>友情链接</Translate></h3></a>
        <p>
          <a href='https://mirrors.cernet.edu.cn/list'><Translate>教育网联合镜像站</Translate></a>
        </p>
      </div>
    </div >
  )
}