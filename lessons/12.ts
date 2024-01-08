namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.slice(-domain.length) === domain ? true : false;
  }
}
