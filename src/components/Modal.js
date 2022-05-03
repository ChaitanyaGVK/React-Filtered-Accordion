export default function Modal({objective, handler}) {
    const style = {display : (objective.show ? 'block' : 'none')};
    const closeModal = ()=> {
        handler({
            show: false,
            objective: {}
        });
    }
    return (
        <div className = "modal" style= {style} onClick = {closeModal}>
            {
                objective.show &&
                <div className = "box">
                    <div className = "textContainer">
                        <p><label>Category: </label><span>{objective.data.category}</span></p>
                        <p><label>Metric name: </label><span>{objective.data.metric_name}</span></p>
                        <p><label>Metric start: </label><span>{objective.data.metric_start}</span></p>
                        <p><label>Metric target: </label><span>{objective.data.metric_target}</span></p>
                    </div>    
                </div>
            }
        </div>
    )
}