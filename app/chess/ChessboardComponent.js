"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var chessboard_1 = require('./chessboard');
var ChessboardComponent = (function () {
    function ChessboardComponent(chessboard) {
        this.chessboard = chessboard;
        this.todos = [0, 1, 2, 3, 4, 5, 6, 7];
    }
    ChessboardComponent.prototype.imageLocation = function (row, col) {
        return "/app/img/" + this.imageFileName(row, col);
    };
    ChessboardComponent.prototype.backgroundCSS = function (row, col) {
        if ((row + col) % 2 == 0)
            return "bg-gray";
        else
            return "bg-white";
    };
    ChessboardComponent.prototype.imageFileName = function (row, col) {
        this.piece = this.chessboard.getFieldValue(row, col);
        if (this.piece == null)
            return "empty.png";
        return this.piece.getPieceImage();
    };
    ChessboardComponent.prototype.onclick = function (row, col) {
        //alert(row + " " + col);
        //this.chessboard.onClick(row, col);
    };
    ChessboardComponent.prototype.ondragstart = function (row, col) {
        //alert(row + " " + col);
        this.chessboard.onClick(row, col);
    };
    ChessboardComponent.prototype.ondragdrop = function (row, col) {
        //alert(row + " drop " + col);
        this.chessboard.move(row, col);
    };
    ChessboardComponent.prototype.ondragover = function (row, col) {
        event.preventDefault();
    };
    ChessboardComponent = __decorate([
        core_1.Component({
            selector: 'chessboard',
            templateUrl: '/app/chess/ChessboardComponent.html',
            providers: [chessboard_1.Chessboard]
        }), 
        __metadata('design:paramtypes', [chessboard_1.Chessboard])
    ], ChessboardComponent);
    return ChessboardComponent;
}());
exports.ChessboardComponent = ChessboardComponent;
//# sourceMappingURL=ChessboardComponent.js.map