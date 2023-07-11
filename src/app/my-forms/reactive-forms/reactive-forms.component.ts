import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

interface AddressFormGroup {
  address: FormControl<string | null>;
}

interface UserModel {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
  username: FormControl<string | null>;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  /**
   * FormControl
   * Manejar el valor de una propiedad en especifico.
   * Se vinculan directamente con los inputs, selects, textareas del html
   */
  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('');
  confirmPaswordControl = new FormControl('');
  nameControl = new FormControl('', [Validators.required]);
  usernameControl = new FormControl('', [Validators.required]);

  /**
   * FormArray
   * Agrupan FormControl, FormArray y FromGroup
   * A modo de array []
   */


  // FormArray<FormGroup<AddressFormGroup>>
  // Aqui lo que decimos que dentro del FormArray
  // Va a haber FormGroups, que dentro van a tener una prop "address"
  // Que va a ser de tipo FromControl<string | null>
  //addresesFormArray = new FormArray<FormGroup<AddressFormGroup>>([
  //  new FormGroup({
  //    address: new FormControl(''),
  //  }),
  //]);


  /**
   * Los FormGroup agrupar FormControl, FormArray y FromGroup
   * A modo de objeto {}
   *
   * {
   *    email: '',
   *    password: '',
   *    city: '',
   * }
   */
  userModel: FormGroup<UserModel> = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    confirmPassword:this.confirmPaswordControl,
    name: this.nameControl,
    username:this.usernameControl,
  //  addresses: this.addresesFormArray,
  });

 // addAddressControl(): void {
 //   this.addresesFormArray.push(
 //     this.fb.group({
  //      address: [''],
  //    })
  //  )
  //}

 // constructor(private fb: FormBuilder) {
  //  console.log(this.addresesFormArray);
  //}

  //deleteFormGroupFromAddressesFormArray(index: number): void {
  //  this.addresesFormArray.removeAt(index);
  //}
}
