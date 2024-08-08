declare module 'papaparse' {
    interface ParseResult<T> {
      data: T[];
      errors: any[];
      meta: any;
    }
  
    
    interface Papa {
      unparse(data: any[], config?: any): string;
      parse(input: string, config?: any): ParseResult<any>;
    }
  
    const Papa: Papa;
    export default Papa;
  }
  