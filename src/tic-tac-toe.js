class TicTacToe {

    constructor() {
        this.count=0;
        this.queue="x";
        this.winner='';
        this.end=false;
        this.field=[[undefined,undefined,undefined],
            [undefined,undefined,undefined],
            [undefined,undefined,undefined]
        ];

    }

    getCurrentPlayerSymbol() {
        return this.queue;

    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex]==undefined)
        {
            this.field[rowIndex][columnIndex]=this.queue;
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
                if( this.field[i][0]===this.field[i][1]&&
                    this.field[i][1]===this.field[i][2]&&
                    this.field[i][0]===this.field[i][2])
                {
                    this.winner=this.field[i][0];
                    this.end=true;
                    break;
                }
                if( this.field[0][i]===this.field[1][i]&&
                    this.field[1][i]===this.field[2][i]&&
                    this.field[0][i]===this.field[2][i])
                {
                    this.winner=this.field[0][i];
                    this.end=true;
                    break;
                }
            }
            if( this.field[0][0]===this.field[1][1]&&
                this.field[1][1]===this.field[2][2]&&
                this.field[0][0]===this.field[2][2])
            {
                this.winner=this.field[1][1];
                this.end=true;
            }
            if( this.field[2][0]===this.field[1][1]&&
                this.field[1][1]===this.field[0][2]&&
                this.field[0][2]===this.field[2][0])
            {
                this.winner=this.field[1][1];
                this.end=true;
            }

        }
        else
        {
            return "this place is taken";
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
    }
}

module.exports = TicTacToe;
