class TicTacToe {

    constructor() {
        this.count=0;
        this.queue="x";
        this.winner='';
        this.end=false;
        this.field=[[1,1,1],[1,1,1],[1,1,1]];

    }

    getCurrentPlayerSymbol() {
        return this.queue;

    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex,columnIndex]===1)
        {
            this.field[rowIndex,columnIndex]=this.queue;
            changeSymbol();
        }
        else
        {
            return "this place is taken";
        }

    }
    changeSymbol()
    {
        this.count++;
        if(this.queue==="x")
        {
            this.queue="o";
        }
        else
        {
            this.queue="x";
        }
        for(var i=0;i<3;i++)
        {
            if( this.field[i][1]===this.field[i][2]&&
                this.field[i][2]===this.field[i][3]&&
                this.field[i][1]===this.field[i][3])
            {
                this.winner=this.field[i][1];
                this.end=true;
                break;
            }
            if( this.field[1][i]===this.field[2][i]&&
                this.field[2][i]===this.field[3][i]&&
                this.field[1][i]===this.field[3][i])
            {
                this.winner=this.field[i][1];
                this.end=true;
                break;
            }
        }
        if( this.field[1][1]===this.field[2][2]&&
            this.field[2][2]===this.field[3][3]&&
            this.field[1][1]===this.field[3][3])
        {
            this.winner=this.field[2][2];
            this.end=true;
        }
        if( this.field[3][1]===this.field[2][2]&&
            this.field[2][2]===this.field[1][3]&&
            this.field[1][3]===this.field[3][1])
        {
            this.winner=this.field[2][2];
            this.end=true;
        }


    }

    isFinished() {
        return this.end;
    }

    getWinner() {
        return this.winner===''?null:this.winner;

    }

    noMoreTurns() {
        return this.count===9?true:false;

    }
    isDraw() {
        return this.winner===''&&noMoreTurns()?true:false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex,colIndex]===1?null:this.field[rowIndex,colIndex];
    }}

module.exports = TicTacToe;
