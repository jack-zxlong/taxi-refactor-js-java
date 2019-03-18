package com.twu.refactoring;

public class Rental {

	private Movie movie;

	private int daysRented;

	public Rental(Movie movie, int daysRented) {
		this.movie = movie;
		this.daysRented = daysRented;
	}

	public int getDaysRented() {
		return daysRented;
	}

	public Movie getMovie() {
		return movie;
	}

	public double getAmount() {
		double thisAmount = 0;
		
		switch (this.getMovie().getPriceCode()) {
		case Movie.REGULAR:
			thisAmount += 2;
			if (this.getDaysRented() > 2)
				thisAmount += (this.getDaysRented() - 2) * 1.5;
			break;
		case Movie.NEW_RELEASE:
			thisAmount += this.getDaysRented() * 3;
			break;
		case Movie.CHILDRENS:
			thisAmount += 1.5;
			if (this.getDaysRented() > 3)
				thisAmount += (this.getDaysRented() - 3) * 1.5;
			break;
		}
		
		return thisAmount;
	}

	public String getRetalStatement() {
		
		String retalStatement = "\t" + this.getMovie().getTitle() + "\t"
				+ String.valueOf(this.getAmount()) + "\n";
		return retalStatement;
	}

	public int getFrequentRenterPoint() {

		int frequentRenterPoint = 0;
		
		frequentRenterPoint++;
		if ((this.getMovie().getPriceCode() == Movie.NEW_RELEASE)
				&& this.getDaysRented() > 1)
			frequentRenterPoint++;
		return frequentRenterPoint;
		
	}

}