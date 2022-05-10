
import ucss from './index.module.scss'

export default function Home(){
    return (
        <div className={ ucss.main }>
            <header>
                <div></div>
                <div>
                    <div>耳朵社区</div>
                    <div>耳朵阅读</div>
                    <div>耳朵天使</div>
                    <div>寻求帮助</div>
                </div>
                <div>
                    <div>消息</div>
                    <div>用户</div>
                </div>
            </header>
            <div></div>
        </div>
    )
}