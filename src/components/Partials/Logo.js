import '../../styles/index.css';

function Logo({ setProj }){
    return (
        <h2 className="cursor-pointer"
            onClick={()=>{ setProj("1") }}
        >
            <span className="text-white">&lt;doThis </span><span style={{ color: "var(--danger-red)" }}>/</span><span className="text-white">&gt;</span>
        </h2>
    )
}
export default Logo;