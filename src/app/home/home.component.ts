import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private modalService: NgbModal) {}
    open(room : string) {
        const modalRef = this.modalService.open(NgbdModalResa);
        modalRef.componentInstance.name = room;
    }

    focus;
    focus1;

    onGraceSchedule() {
        this.open("GRACE");
    }

    onJudySchedule() {
        this.open("JUDY");
    }


    ngOnInit(): void {
    }

    onLizSchedule() {
        this.open("LIZ");
    }

    onMarilynSchedule() {
        this.open("MARILYN");
    }

    onGingerSchedule() {
        this.open("GINGER");
    }
}


@Component({
    selector: 'app-modal-resa',
    template: `
    <div class="modal-header">
        <h4 class="modal-title text-center">Réservation pour {{name}}</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" style="padding: 0px">
        <div *ngIf="name.toUpperCase() === 'GRACE'">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=17721960&appointmentType=10145862" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>        </div>

        <div *ngIf="name.toUpperCase() === 'JUDY'">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=17721960&appointmentType=10145859" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </div>

        <div *ngIf="name.toUpperCase() === 'LIZ'">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=17721960&appointmentType=10146524" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>        </div>

        <div *ngIf="name.toUpperCase() === 'GINGER'">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=17721960&appointmentType=10146526" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>        </div>
        
        <div *ngIf="name.toUpperCase() === 'MARILYN'">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=17721960&appointmentType=10146529" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>        </div>
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Fermer</button>
        </div>
    </div>
    `
})
export class NgbdModalResa {
    @Input() name : string;
    constructor(public activeModal: NgbActiveModal) {}
}
