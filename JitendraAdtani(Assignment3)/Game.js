const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FRIEND:  Symbol("friend"),
    WAIT: Symbol("wait"),
    HOTEL: Symbol("hotel"),
    RECEPTION: Symbol("reception"),
    NOTE: Symbol("note"),
    END: Symbol("end")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "I know this red dark sky is freaking you out. Your friend being in harsh dropped you here and left you close to this spooky hotel! Would you wait or go to the hotel?";
                this.stateCur = GameState.FRIEND;
                break;
            case GameState.FRIEND:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "No one gonna come to pick you up! Your phone's battery is dead since an hour. Do you keep Waiting or do you go to the hotel?";
                }else{
                    sReply = "At hotel main door you see a tagline 'In space no one can hear you scream!'Do you knock or run back to wait?";
                    this.stateCur = GameState.HOTEL;    
                }
                break;
            case GameState.HOTEL:
                if(sInput.toLowerCase().match("knock")){
                    sReply = "You greeted by a old bald scary man. He walks you to the receptionist and when you look back to say thank you, he's gone! Do you wait at the reception or run back?";
                    this.stateCur = GameState.RECEPTION;
                }else{
                    sReply = "No one gonna come to pick you up! Your phone's battery is dead since an hour. Do you keep Waiting or do you go to the hotel?";
                    this.stateCur = GameState.FRIEND;

                }
                break;
            case GameState.RECEPTION:
                if(sInput.toLowerCase().match("run") || sInput.toLowerCase().match("back")){
                    sReply = "No one gonna come to pick you up! Your phone's battery is dead since an hour. Do you keep Waiting or do you go to the hotel?";
                    this.stateCur = GameState.FRIEND;

                }else{
                    sReply = "Suddenly someone puts a note on the reception table says 'Floor : 13th' and you know that 13th floor is always missing in most of the buildings. Would you go to that floor or wait outside? ";
                    this.stateCur = GameState.NOTE;
    
                }
                break;
                case GameState.NOTE:
                if(sInput.toLowerCase().match("floor")){
                    sReply = "You've come to the lift and there is no 13th floor but still lift takes you to 13th floor by itself! now yor're stuck. Do you still wanna go further? Say yes!";
                    this.stateCur = GameState.END;

                }else{
                    sReply = "No one gonna come to pick you up! Your phone's battery is dead since an hour. Do you keep Waiting or do you go to the hotel?";
                    this.stateCur = GameState.RECEPTION;
    
                }
                break;
                case GameState.END:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Great! At 13th floor, you greeted by a lady saying 'Happy Halloween!'. Enjoy the party.";
                }else{
                    sReply = "Sorry! you can't go back! ";
                    this.stateCur = GameState.END;
    
                }
                break;
        }
        return([sReply]);
    }
}