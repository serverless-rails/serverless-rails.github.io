
import "index.scss"

window.twiddler = function() {
  return {
    state: 0,
    toggleState() {
      this.state = !this.state
    },
    init() {
      setInterval(this.toggleState.bind(this), 400)
    }
  }
}

// window.comingSoon = function() {
//   const comingSoonMsgs = [
//     "soonish",
//     "sometime",
//     "eventually",
//     "at some point",
//     "whenever"
//   ]
//   return {
//     msg: comingSoonMsgs[0],
//     current: 0,
//     nextMsg() {
//       this.current++
//       this.msg = comingSoonMsgs[this.current % comingSoonMsgs.length]
//     },
//     init() {
//       setInterval(this.nextMsg.bind(this), 1100)
//     }
//   }
// }
