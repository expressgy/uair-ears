
import ucss from './index.module.scss'
import logoP from './logo.png'
import f3 from './zx.svg'
import f2 from './f22.svg'
import f1 from './f11.svg'
import f4 from './f41.svg'
import userss from './userss.svg'
import messagess from './messagess.svg'
import lifess from './life.svg'
import psychology from './psychology.svg'
import policy from './policy.svg'
import education from './education.svg'
import law from './law.svg'
import doctor from './doctor.svg'


import {useNavigate} from "react-router-dom";



export default function Home(){

    const navigate = useNavigate();
    return (
        <div className={ ucss.main }>
            <header>
                <div>
                    <img src={ logoP } alt=""/>
                </div>
                <div>
                    <div>耳朵咨询</div>
                    <div>耳朵阅读</div>
                    <div>耳朵技能</div>
                    <div>耳朵社区</div>
                </div>
                <div>
                    <div><img src={userss} alt=""/></div>
                    <div><img src={messagess} alt=""/></div>
                </div>
            </header>
            <div>
                <div></div>
                <div>
                    <div>
                        <div>
                            <img src={f3} alt=""/>
                        </div>
                        <div>
                            <div>耳朵咨询</div>
                            <div className={ucss.boxACE}>
                                <div><img src={psychology} alt=""/>心理咨询</div>
                                <div><img src={law} alt=""/>法律咨询</div>
                                <div><img src={lifess} alt=""/>生活咨询</div>
                                <div><img src={policy} alt=""/>政策咨询</div>
                                <div><img src={education} alt=""/>教育咨询</div>
                                <div><img src={doctor} alt=""/>医疗咨询</div>
                                {/*<div>[2021年 11月 28日] 小耳朵团队第7次寻找小天使活动，汪隽仪同学</div>*/}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={f2} alt=""/>
                        </div>
                        <div>
                            <div>耳朵阅读</div>
                            <div>
                                <div>《天才在左，疯子在右》</div>
                                <div>《爱的艺术》</div>
                                <div>《心理学与生活》</div>
                                <div>《手语365》</div>
                                <div>《学说话》</div>
                                <div>《只愿你曾被这世界温柔相待》</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={f4} alt=""/>
                        </div>
                        <div>
                            <div>耳朵技能</div>
                            <div>
                                <div>手语课程学习</div>
                                <div>基本手语教程</div>
                                <div>进阶手语教程</div>
                                <div>高级手语教程</div>
                                <div>手语等级考试教程</div>
                                <div>手语练习</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={f1} alt=""/>
                        </div>
                        <div>
                            <div>耳朵社区</div>
                            <div>
                                <div>[2022年 4月 28日] 与本校热心同学合作，上线小耳朵心理咨询功能，由在校心理专业学生，与需要交流内心想法的伙伴们进行交流。</div>
                                <div>[2022年 2月 23日] 小耳朵成员走访社区，深入了解聋哑人生活，并学习手语，计划在平台上增加手语学习模块。</div>
                                <div>[2022年 1月 30日] 庆祝新的一年即将到来，希望新的一年里，我们可以帮助更多的人。</div>
                                <div>[2021年 7月 31日] 小耳朵网站正式上线。</div>
                                <div>[2021年 5月 13日] 小耳朵成员增加至13人，我们正在寻找更多的志同道合的朋友，共同投入到小耳朵公益实践当中。</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}